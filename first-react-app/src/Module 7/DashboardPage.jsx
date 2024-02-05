// Add this code to DashboardPage.jsx : nested route path components
// rendered by matching nested routes in AppRoutes.jsx
// These components will appear in the <Outlet /> placeholder spot
// in the DashboardPage component if the route matches
export function DashboardMessages(props) {
    const { currentUser } = useUserContext();
    return (
    <div className="DashboardMessages">
    <p>Welcome to your dashboard, {currentUser.email}</p>
    </div>
    )
    }
    export function DashboardTasks(props) {
    const tasks = [
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Decide on capstone project' },
    { id: 3, name: 'Learn databases' }
    ]
    return (
    <div className="DashboardTasks">
    <ul className="tasks">
    { tasks.map(task => <li key={task.id}>{task.name}</li>) }
    </ul>
    </div>
    )
    }
    