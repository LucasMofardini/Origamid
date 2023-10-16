import React, { useEffect, useState } from "react";

const user = () => ({
  nome: "Lucas",
  profissao: "Desenvolvedor",
});

type User = {
  nome: string;
  profissao: string;
};

const UseStateExample = () => {
  const [data, setData] = useState<null | User>(null);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      {data && (
        <div>
          {data.nome} - {data.profissao}
        </div>
      )}
      <div>
        <p>Total: {total}</p>
        <Button incrementar={setTotal} />
      </div>
    </div>
  );
};

export default UseStateExample;

type ButtonProps = {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ incrementar }: ButtonProps) => {
  return <button onClick={() => incrementar((n) => n + 1)}></button>;
};
