
export const ROUTER_KEY = createEnum({
    
    // #region auth
    login: "login",
    register: "register",
    forgot_pass: "forgot_pass",
    // #endregion

    // #region home
    home: "home",
    // #endreigon

    // #region task
    task_list: "task_list",
    create_task: "create_task",
    edit_task: "edit_task",
    // #endregion

})

function createEnum<T extends { [P in keyof T]: P }>(o: T) {
    return o
}