import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col justify-center py-20 px-3 xl:px-20'>
      <h1 className='text-3xl font-bold text-center'>Home</h1>

      <div className='mt-10 grid xl:grid-cols-2'>
        <Link href={"/todo"}>
          <Card>
            <div className='p-5'>
              <h1 className='text-2xl font-semibold'>Todo App</h1>
              <p className='mt-5'>Features:</p>
              <div className='bg-black text-white px-5 py-3 rounded-lg mt-3'>
                <p>
                  <code>
                    - CI CD setup with Github Actions which deploys the APP to
                    EC2
                  </code>
                </p>
                <p>
                  <code>
                    - API endpoint deployed on `api.shubhamvscode.online`
                  </code>
                </p>
                <p>
                  <code>- Using HTTPS: SSL Certification</code>
                </p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </main>
  );
}
