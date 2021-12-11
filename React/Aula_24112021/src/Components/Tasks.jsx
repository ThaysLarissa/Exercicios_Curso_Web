import TaskItem from './TaskItem';

//const tasks = [
   //Arrays de objetos
   //{
        //id: 1,
        //text: 'Consulta médica', 
        //day: '5 de Fev as 14:30',
       // reminder: true,
    //},
    //{
        //id: 2,
        //text: 'Reunião na Escola',
        //day: '6 de Fev as 13:30',
        //reminder: true,
    //},
//{
       // id: 3,
        //text: 'Compras no Supermercado',
        //day: '7 de Fev as 8:30',
       //reminder: false,
    //},
//];

//Componente Tasks
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
            //<h3>{task.text}</h3> Transformando os text em titulos de h3 na page
            //<h3 key={task.id}>{task.text}</h3> //Transformando os text em titulos de h3 na page e criando um propriedade key dentro do h3
                <TaskItem key={task.id} task={task} /> // Transferindo a responsabilidade do componente de exibir o item das tarefas para o TaskItem

            ))}
        </>
    );
};

export default Tasks;
