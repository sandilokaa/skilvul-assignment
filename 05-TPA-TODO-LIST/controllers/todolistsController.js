const todolistsService = require("../services/todolistsService");


/* --------------- Handle Create To Do List --------------- */

const handleCreateToDoList = async(req, res, next) => {

    const user_id = req.user.id;

    const { activity, description, activityDate, activityTime } = req.body;

    const { status, status_code, message, data} = await todolistsService.handleCreateToDoList({
        user_id,
        activity,
        description,
        activityDate,
        activityTime
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* --------------- End Handle Create To Do List --------------- */


/* --------------- Handle Get All To Do Lists --------------- */

const handleGetAllToDoLists = async(req, res) => {

    const { status, status_code, message, data} = await todolistsService.handleGetAllToDoLists();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* --------------- End Handle Get All To Do Lists --------------- */


/* --------------- Handle Get To Do Lists By User Id --------------- */

const handleGetToDoListByUserId = async(req, res, next) => {

    const { id } = req.params;

    const { status, status_code, message, data} = await todolistsService.handleGetToDoListByUserId({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

/* --------------- End Handle Get To Do Lists By User Id --------------- */


/* --------------- Handle Get To Do Lists By Id --------------- */

const handleGetToDoListById = async(req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await todolistsService.handleGetToDoListById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* --------------- End Handle Get To Do Lists By Id --------------- */


/* --------------- Handle Update To Do Lists By Id --------------- */

const handleUpdateToDoListById = async(req, res, next) => {

    const { id } = req.params;

    const user_id = req.user.id;

    const { activity, description, activityDate, activityTime } = req.body;

    const { status, status_code, message, data} = await todolistsService.handleUpdateToDoListById({ 
        id, 
        user_id,
        activity,
        description,
        activityDate,
        activityTime 
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

}

/* --------------- End Handle Update To Do Lists By Id --------------- */


/* --------------- Handle Delete To Do Lists By Id --------------- */

const handleDeleteToDoListById = async(req, res, next) => {

    const { id } = req.params;

    const user_id = req.user.id;

    const { status, status_code, message, data} = await todolistsService.handleDeleteToDoListById({ id, user_id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

/* --------------- End Handle Delete To Do Lists By Id --------------- */


/* --------------- Handle Delete To Do Lists By User Id --------------- */

const handleDeleteToDoListByUserId = async(req, res, next) => {

    const { id } = req.params;

    const user_id = req.user.id;

    const { status, status_code, message, data} = await todolistsService.handleDeleteToDoListByUserId({ id, user_id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

/* --------------- End Handle Delete To Do Lists By User Id --------------- */


/* --------------- Handle Delete All To Do Lists --------------- */

const handleDeleteAllToDoList = async(req, res) => {
    
    const { status, status_code, message, data} = await todolistsService.handleDeleteAllToDoList();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

/* --------------- End Handle Delete All To Do Lists --------------- */


module.exports = { 
    handleCreateToDoList,
    handleGetAllToDoLists,
    handleGetToDoListByUserId,
    handleGetToDoListById,
    handleUpdateToDoListById,
    handleDeleteToDoListById,
    handleDeleteToDoListByUserId,
    handleDeleteAllToDoList 
};