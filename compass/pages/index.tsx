// pages/index.tsx

import Button from '@/components/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Input from '@/components/Input'
import InlineLink from '@/components/InlineLink';
import Page from '@/components/auth/Page';

const Home: NextPage = () => {
    return (
        <Page>
            <form className="bg-white shadow-md rounded px-12 pt-8 pb-8 mb-4">
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
                <div className="flex flex-col items-left space-y-2">
                    <InlineLink>
                        Forgot password?
                    </InlineLink>
                    <Button>
                        Login
                    </Button>
                    
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy; 2024 Compass Center
            </p>
        </Page>
    );
};

export default Home;
