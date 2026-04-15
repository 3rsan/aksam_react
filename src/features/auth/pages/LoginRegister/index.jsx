import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

function LoginRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="flex gap-6 w-full max-w-6xl">
        <div className="flex-1">
          <RegisterForm />
        </div>
        <div className="flex-1">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
