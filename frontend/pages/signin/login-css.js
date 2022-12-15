import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../../components/account'

import { LockClosedIcon } from '@heroicons/react/20/solid'

const LogIn = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  //น่าจะทำใหม่แบบเขียนเอง
  return (
    <div class="h-[87vh]">

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdn-icons-png.flaticon.com/512/763/763704.png"
              alt="Cat "
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              เข้าสู่ระบบ
            </h2>

          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="
                  relative block 
                  w-full 
                  appearance-none 
                  rounded-none rounded-t-md 
                  border border-gray-300 
                  px-3 py-2 
                  text-gray-900 
                  placeholder-gray-400 
                  focus:z-10 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  class="
                mb-0
                relative block
                w-full
                rounded-none rounded-b-md
                border-gray-300
                shadow-sm
                placeholder-gray-400 
                focus:z-10 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 sm:text-sm
                "
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-salmon focus:ring-bright-salmon"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  จดจำรหัสผ่าน
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-salmon hover:text-bright-salmon">
                  ลืมรหัสผ่าน
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-salmon py-2 px-4 text-sm font-light text-white hover:bg-bright-salmon focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-bright-salmon group-hover:text-light-salmon" aria-hidden="true" />
                </span>
                เข้าสู่ระบบ
              </button>
            </div>

            <div className="flex text-sm">
              <span html="remember-me" className="ml-2 block text-sm text-gray-900">
                ยังไม่มีบัญชี?
              </span>
              <a href="#" className="font-medium text-salmon hover:text-bright-salmon mx-1">
                สมัครสมาชิก
              </a>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default LogIn