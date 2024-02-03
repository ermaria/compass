// pages/index.tsx

import Button from '@/components/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Input from '@/components/Input'
import InlineLink from '@/components/InlineLink';

const Home: NextPage = () => {
    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <Input />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <Input />
                </div>
                <div className="flex items-center justify-between">
                    <Button>
                        Login
                    </Button>
                    <InlineLink>
                        Forgot password?
                    </InlineLink>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2024 Compass Center
            </p>
        </div>
    );
};

export default Home;
