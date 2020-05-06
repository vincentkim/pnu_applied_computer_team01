import React from "react";
import {} from "semantic-ui-react";

const LoginBlock = styled.div``;

const Login = () => {
  return (
    <Form style={{ maxWidth: 450, marginTop: 30 }} onSubmit={onSubmit}>
      <Form.Field>
        <label>email</label>
        <input placeholder="email..." value={email} onChange={onChangeEmail} />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input
          placeholder="Last Name"
          value={password}
          onChange={onChangePassword}
        />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Login;
