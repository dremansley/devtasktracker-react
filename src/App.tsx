import {useAuthCheck} from "./features/User/hooks/useAuthCheck.ts";
import {useUserProjects} from "./features/Projects/hooks/useUserProjects.ts";
import {useTasks} from "./features/Tasks/hooks/useTasks.ts";
import {useTaskDetail} from "./features/Tasks/hooks/useTaskDetail.ts";

function App() {

    const {data: authCheck} = useAuthCheck();
    const {data: userProjects} = useUserProjects();
    const {data: tasks} = useTasks(1);
    const {data: task_detail} = useTaskDetail(1)

    console.log("Projects", userProjects);
    console.log("Project Tasks", tasks);
    console.log("Task Detail", task_detail);

      return (
          authCheck?.is_authenticated && <>
          </>
      )
    }

export default App;
