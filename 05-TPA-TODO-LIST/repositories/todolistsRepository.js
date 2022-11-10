const { users, todo_lists } = require("../models");
const { Op } = require("sequelize");

class todolistsRepository {

    /* --------------- Handle Create To Do List --------------- */

    static async handleCreateToDoList({ userId, activity, description, activityDate, activityTime }) {

        const createdToDoList = await todo_lists.create({
            userId,
            activity,
            description,
            activityDate,
            activityTime
        });

        return createdToDoList;
    };

    /* --------------- Handle Create To Do List --------------- */


    /* --------------- Handle Get All To Do Lists --------------- */

    static async handleGetAllToDoLists() {

        const query = {
            where: {},
            include: [{
                model: users,
                attributes: ["name", "email"]
            }]
        };

        const getAllToDoLists = await todo_lists.findAll(query);

        return getAllToDoLists;
    };

    /* --------------- End Handle Get All To Do Lists --------------- */


    /* --------------- Handle Get To Do Lists By User Id --------------- */

    static async handleGetToDoListByUserId({ id }) {

        const query = {
            where: {},
            include: [{
                model: todo_lists,
                attributes: ["activity", "description", "activityDate", "activityTime"]
            }]
        };

        if (id) {
            query.where = { ...query.where, id }
        }

        const getToDoListByUserId = await users.findAll(query);

        return getToDoListByUserId;
    };

    /* --------------- End Handle Get To Do Lists By User Id --------------- */


    /* --------------- Handle Get To Do Lists By Id --------------- */

    static async handleGetToDoListById({ id }) {

        const query = {
            where: {},
            include: [{
                model: users,
                attributes: ["name", "email"]
            }]
        };

        if (id) {
            query.where = { ...query.where, id }
        }

        const getToDoListByUserId = await todo_lists.findOne(query);

        return getToDoListByUserId;
    };

    /* --------------- End Handle Get To Do Lists By Id --------------- */


    /* --------------- Handle Update To Do Lists By Id --------------- */

    static async handleUpdateToDoListById({ id, activity, description, activityDate, activityTime }) {

        const updatedToDoList = await todo_lists.update({
            activity,
            description,
            activityDate,
            activityTime
        }, {
            where: { id }
        });

        return updatedToDoList;
    };

    /* --------------- End Handle Update To Do Lists By Id --------------- */


    /* --------------- Handle Delete To Do Lists By Id --------------- */

    static async handleDeleteToDoListById({ id }) {

        const deletedToDoList = await todo_lists.destroy({
            where: { id }
        });

        return deletedToDoList;

    };

    /* --------------- End Handle Delete To Do Lists By Id --------------- */


    /* --------------- Handle Delete To Do Lists By User Id --------------- */

    static async handleDeleteToDoListByUserId({ id }) {

        const deletedToDoList = await todo_lists.destroy({
            where: 
            { 
                userId: id
            }
        });

        return deletedToDoList;

    };

    /* --------------- End Handle Delete To Do Lists By User Id --------------- */


    /* --------------- Handle Delete All To Do Lists --------------- */

    static async handleDeleteAllToDoList() {

        const deletedToDoList = await todo_lists.destroy({ truncate: true });

        return deletedToDoList;

    };

    /* --------------- End Handle Delete All To Do Lists --------------- */

};

module.exports = todolistsRepository;