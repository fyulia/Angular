export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  number: string;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0, number: "+79000000000" },
  { id: 2, name: 'Петр', surname: 'Петров', type: 1, number: "+79000000000" },
  { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, number: "+79000000000" },
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3, number: "+79000000000" },
];
