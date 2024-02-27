// pages/index.tsx

import Button from '@/components/Button';
import Input from '@/components/Input'
import InlineLink from '@/components/InlineLink';
import Paper from '@/components/auth/Paper';
import { Metadata } from 'next'
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login',
}

export default function Page()  {
    return (
        <>
            <Paper>
                <form className="mb-0 m-auto mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white max-w-xl">
                    <Image
                        src="/logo.png"
                        alt='Compass Center logo.'
                        width={100}
                        height={91}
                    />
                    <h1 className='font-bold text-xl text-purple-800'>Login</h1>
                    <div className="mb-4">
                        <Input type='email' title="Email" placeholder="janedoe@gmail.com" iconKey={'EmailInputIcon'} />
                    </div>
                    <div className="mb-6">
                        <Input type='password' title="Password"  />
                    </div>
                    <div className="flex flex-col items-left space-y-4">
                        <InlineLink href="/forgot_password">
                            Forgot password?
                        </InlineLink>
                        <Button>
                            Login
                        </Button>

                    </div>
                </form>
                <p className="text-center mt-6 text-gray-500 text-xs">
                    &copy; 2024 Compass Center
                </p>
            </Paper>
        </>
    );
};

