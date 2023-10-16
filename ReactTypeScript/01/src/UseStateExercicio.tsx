import React, { useState, useEffect } from "react";
import Input from "./Input";

// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final,
//     faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

type Venda = {
  nome: string;
  status: string;
};

const ExercicioUseState = () => {
  const [data, setData] = useState<null | Venda[]>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const getData = () => {
    const searchParams = new URLSearchParams();

    if (startDate) searchParams.append("inicio", startDate);

    if (endDate) searchParams.append("final", endDate);

    fetch(`https://data.origamid.dev/vendas/?${searchParams}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data as Venda[]);
      })
      .catch((e) => console.log(e));
  };

  const validateDates = () => {
    if (startDate !== "" && endDate !== "") return;

    getData();
  };

  useEffect(() => {
    validateDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Input
          label="Inicio"
          id="startDate"
          value={startDate}
          onChange={({ target }) => setStartDate(target.value)}
          type="date"
          style={{ width: "200px", margin: "0 10px" }}
        />
        <Input
          label="Final"
          id="endDate"
          value={endDate}
          onChange={({ target }) => setEndDate(target.value)}
          type="date"
          style={{ width: "200px", margin: "0 10px" }}
        />
      </div>

      <div>
        {data &&
          data.length &&
          data.map((venda) => {
            return <Venda nome={venda.nome} status={venda.status} />;
          })}
      </div>
    </>
  );
};

export default ExercicioUseState;

const Venda = ({ nome, status }: Venda) => {
  return (
    <div style={{ margin: '10px 0'}}>
      <p>Venda : {nome}</p>
      <p>Status: {status}</p>
    </div>
  );
};
