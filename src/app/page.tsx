import { Title } from "@/components/Title";

export default function Home() {
  return (
    <main>
      <div className="text-center pt-10 font-light">
        <Title>xolving</Title>
        <p className="pt-3 text-xl mb-5">개발자에 의한, 개발자를 위한</p>
        <a href="https://discord.gg/36tCw3kYuJ" className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-2 px-7 rounded-lg">디스코드</a>
      </div>
    </main>
  );
}
