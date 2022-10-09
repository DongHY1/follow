import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { RegisterInput, registerSchema } from '../schema/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { LoadingButton } from '../components/LoadingButton';
import { toast } from 'react-toastify';
import { trpc } from '../utils/trpc';

const RegisterPage = () => {
  const navigate = useNavigate();

  const { isLoading, mutate } = trpc.useMutation(['auth.register'], {
    onSuccess: () => {
      toast.success('Registration Successful!');
      navigate('/login');
    },
    onError: (error) => {
      toast.error(error.message, {
        type: 'error',
        position: 'top-right',
      });
    },
  });

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    mutate(values);
  };

  return (
    <section className="py-8 bg-ct-blue-600 min-h-screen grid place-items-center">
      <div className="w-full">
        <h1 className="text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 mb-4">
          Welcome to Follow!
        </h1>
        <h2 className="text-lg text-center mb-4 text-ct-dark-200">
          Sign Up To Get Started!
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
          >
            <FormInput label="Nick Name" name="name" />
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="Password" name="password" type="password" />
            <FormInput
              label="Confirm Password"
              name="passwordConfirm"
              type="password"
            />
            <span className="block">
              Already have an account?
              <Link to="/login" className="text-ct-blue-600">
                Login Here
              </Link>
            </span>
            <LoadingButton loading={isLoading} textColor="text-ct-blue-600">
              Sign Up
            </LoadingButton>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default RegisterPage;
