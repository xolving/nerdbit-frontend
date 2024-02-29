"use client"

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-9xl">{children}</h1>;
}
