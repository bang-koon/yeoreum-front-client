import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useLoginMutation } from '../../hooks/queries/auth/login';
import hashPassword from '../../utils/hashPassword';

const loginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: '', password: '' });
  const loginMutation = useLoginMutation(
    data => {
      const user = data.response.user;
      if (user.status != 3) {
        router.push(
          {
            pathname: 'signup',
            query: { userNo: user.userNo, status: user.status },
          },
          '/signup',
        );
      } else {
        console.log(data);
        const token = data.response.user.accessToken;
        alert(data.msg);
        localStorage.setItem('token', token);
        router.replace('/');
      }
    },
    (error: any) => {
      const msg = error.response.data.message;
      alert(msg);
    },
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = hashPassword(user.password);
    loginMutation.mutate({ email: user.email, password });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Label>
          <Input
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="email"
          />
        </Label>
        <Label>
          <Input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="password"
          />
        </Label>
        <Link href="">
          <ForgotPw>Forgot Password</ForgotPw>
        </Link>
        <Submit>Login</Submit>
      </Form>
    </>
  );
};

export default loginForm;

const Form = styled.form`
  display: flex;
  width: 65%;
  flex-direction: column;
  & > a {
    align-self: flex-end;
  }
`;
const Label = styled.label`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 2.6em;
  margin: 4px 0;
  padding: 8px;
  background: #f5f6f7;
  border: solid 1px #eee;
  border-radius: 4px;
  :focus {
    background: #fff;
  }
  @media (max-width: 679px) {
    height: 3rem;
  }
`;
const ForgotPw = styled.p`
  font-size: 0.6em;
  align-self: flex-end;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.palette.main};
`;
const Submit = styled.button`
  display: inline-block;
  width: 100%;
  min-height: 2.6em;
  margin: 2em 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.main};
  color: #fff;
  font-size: 0.875em;
  @media (max-width: 679px) {
    height: 3rem;
  }
`;
