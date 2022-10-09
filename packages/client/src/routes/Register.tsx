import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { trpc } from '../utils/trpc';
import { CreateUserInput } from 'server/src/schema/user.schema';
const Register = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const navigate = useNavigate();

  const { mutate, error } = trpc.useMutation(['auth.register'], {
    onSuccess: () => {
      navigate('/login');
    },
  });
  function onSubmit(values: CreateUserInput) {
    mutate(values);
  }

  return (
    <section className="h-screen">
      <div className="h-full px-6 text-gray-800">
        <div className="g-6 flex h-full flex-wrap items-center justify-center  ">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              {error && error.message}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  {...register('name')}
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  {...register('email')}
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="Password"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  {...register('password')}
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <input
                  type="Password"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="lg:text-middle text-center">
                <button
                  type="submit"
                  className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
