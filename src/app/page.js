"use client";
import Image from "next/image";
import usePost from '@/app/hooks/usePost';

export default function Home() {
    const { data, loading, error, postData } = usePost("/auth/signup");

    const formAction = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const formObject = Object.fromEntries(formData.entries());

        if (typeof postData === 'function') {
          postData(formObject);
        } else {
          console.error('postData is not a function');
        }

        console.log("Submitted Data:", Object.fromEntries(formData));
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black bg-slate-500">
            <form onSubmit={formAction} className="flex flex-col gap-4 flex-1">
                    <label>
                        Username:{" "}
                        <input type="text" name="fullName" id="username" />
                    </label>
                    <label>
                        Email: <input type="email" name="email" id="email" />
                    </label>
                    <label>
                        Password:{" "}
                        <input type="password" name="password" id="password" />
                    </label>
                    <button type="submit" className="bg-red-500 text-black">
                        Submit
                    </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Response: {JSON.stringify(data)}</p>}
        </main>
    );
}
