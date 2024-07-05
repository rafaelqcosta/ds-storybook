import clsx from 'clsx';

export type ItemLegenda = {
  titulo: string;
  cor: string;
};

export type ListaDeLegendasProps = {
  items: ItemLegenda[];
};

export function ListaDeLegendas(props: ListaDeLegendasProps) {
  return (
    <div className="px-5 py-2 relative flex flex-col space-y-1">
      {props.items.map((item, index) => (
        <div key={index} className="border-2 border-gray-100 px-5 rounded-md shadow-sm flex items-center space-x-4">
          <div className={clsx("w-5 h-10 rounded-full", item.cor)} />
          <div className="text-gray-500 text-sm">{item.titulo}</div>
        </div>
      ))}
    </div>
  );
}
