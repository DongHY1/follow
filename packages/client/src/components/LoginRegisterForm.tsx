import React from 'react';
interface FormProps {
  isLogin: boolean;
}
const LoginRegisterForm = ({ isLogin }: FormProps) => {
  return (
    <section className="h-screen">
      <div className="h-full px-6 text-gray-800">
        <div className="g-6 flex h-full flex-wrap items-center justify-center  ">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="username"
                  placeholder="Username"
                />
              </div>

              <div className="mb-6">
                <input
                  type="Password"
                  className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="password"
                  placeholder="Password"
                />
              </div>
              {!isLogin && (
                <div className="mb-6">
                  <input
                    type="Password"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="confirm"
                    placeholder="Confirm Password"
                  />
                </div>
              )}
              <div className="lg:text-middle text-center">
                <button
                  type="button"
                  className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  {isLogin ? 'Login' : 'Register'}
                </button>
                {isLogin && (
                  <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                    Don&apos;t have an account?
                    {/* <a className="text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700">
                      Register
                    </a> */}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginRegisterForm;
