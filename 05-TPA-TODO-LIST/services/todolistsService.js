const todolistsRepository = require("../repositories/todolistsRepository");


class todolistService {

    /* --------------- Handle Create To Do List --------------- */

    static async handleCreateToDoList({ userId, activity, description, activityDate, activityTime }) {

        try {

            // ------------------------- Payload Validation ------------------------- //

            if (!activity) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Activity wajib diisi!",
                    data: {
                        todo_lists: null,
                    },
                };
            }

            if (!activityDate) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Tanggal wajib diisi!",
                    data: {
                        todo_lists: null,
                    },
                };
            }

            const createdToDoList = await todolistsRepository.handleCreateToDoList({
                userId,
                activity,
                description,
                activityDate,
                activityTime
            });

            return {
                status: true,
                status_code: 201,
                message: "User berhasil menambahkan to do list",
                data: {
                    todo_lists: createdToDoList,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    registered_user: null,
                },
            };
        }

    };

    /* --------------- End Handle Create To Do List --------------- */


    /* --------------- Handle Get All To Do Lists --------------- */

    static async handleGetAllToDoLists() {

        try {

            const getAllToDoLists = await todolistsRepository.handleGetAllToDoLists();

            return {
                status: true,
                status_code: 200,
                message: "Data berhasil didapatkan!",
                data: {
                    get_todo_lists: getAllToDoLists,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    get_todo_lists: null,
                },
            };
        }

    };

    /* --------------- End Handle Get All To Do Lists --------------- */


    /* --------------- Handle Get To Do Lists By User Id --------------- */

    static async handleGetToDoListByUserId({ id }) {

        try {

            const getToDoListByUserId = await todolistsRepository.handleGetToDoListByUserId({ id });

            return {
                status: true,
                status_code: 200,
                message: "Data berhasil didapatkan!",
                data: {
                    get_todo_lists: getToDoListByUserId,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    get_todo_lists: null,
                },
            };
        }

    };

    /* --------------- End Handle Get To Do Lists By User Id --------------- */


    /* --------------- Handle Get To Do Lists By Id --------------- */

    static async handleGetToDoListById({ id }) {

        try {

            const getToDoListById = await todolistsRepository.handleGetToDoListById({ id });

            return {
                status: true,
                status_code: 200,
                message: "Data berhasil didapatkan!",
                data: {
                    get_todo_lists: getToDoListById,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    get_todo_lists: null,
                },
            };
        }

    };

    /* --------------- End Handle Get To Do Lists By Id --------------- */


    /* --------------- Handle Update To Do Lists By Id --------------- */

    static async handleUpdateToDoListById({ id, userId, activity, description, activityDate, activityTime }) {

        try {

            const getToDoListById = await todolistsRepository.handleGetToDoListById({ id });

            if (getToDoListById.userId == userId) {

                const updatedToDoList = await todolistsRepository.handleUpdateToDoListById({
                    id,
                    activity,
                    description,
                    activityDate,
                    activityTime
                });

                return {
                    status: true,
                    status_code: 200,
                    message: "User berhasil mengubah to do list!",
                    data: {
                        updated_todo_list: updatedToDoList,
                    },
                };

            } else {
                return {
                    status: false,
                    status_code: 401,
                    message: "Gagal update data (Bukan punya anda)!",
                    data: {
                        updated_todo_list: null,
                    },
                };
            }

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updated_todo_list: null,
                },
            };
        }

    };

    /* --------------- End Handle Update To Do Lists By Id --------------- */


    /* --------------- Handle Delete To Do Lists By Id --------------- */

    static async handleDeleteToDoListById({ id, userId }) {

        try {

            const getToDoListById = await todolistsRepository.handleGetToDoListById({ id });

            if (getToDoListById.userId == userId) {

                const deletedToDoList = await todolistsRepository.handleDeleteToDoListById({ id });

                return {
                    status: true,
                    status_code: 200,
                    message: "User berhasil menghapus to do list!",
                    data: {
                        deleted_todo_list: deletedToDoList,
                    },
                };

            } else {
                return {
                    status: false,
                    status_code: 401,
                    message: "Gagal delete data (Bukan punya anda)!",
                    data: {
                        deleted_todo_list: null,
                    },
                };
            }

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updated_todo_list: null,
                },
            };
        }

    };

    /* --------------- End Handle Delete To Do Lists By Id --------------- */


    /* --------------- Handle Delete To Do Lists By User Id --------------- */

    static async handleDeleteToDoListByUserId({ id, userId }) {

        try {

            const deletedToDoList = await todolistsRepository.handleDeleteToDoListByUserId({ id });

            return {
                status: true,
                status_code: 200,
                message: "User berhasil menghapus to do list!",
                data: {
                    deleted_todo_list: deletedToDoList,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    deleted_todo_list: null,
                },
            };
        }

    };

    /* --------------- End Handle Delete To Do Lists By User Id --------------- */


    /* --------------- Handle Delete All To Do Lists --------------- */

    static async handleDeleteAllToDoList() {

        try {

            const deletedAllToDoList = await todolistsRepository.handleDeleteAllToDoList();

            return {
                status: true,
                status_code: 200,
                message: "Data to do list terhapus semua!",
                data: {
                    deleted_todo_list: deletedAllToDoList,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    deleted_todo_list: null,
                },
            };
        }

    };

    /* --------------- End Handle Delete All To Do Lists --------------- */

};

module.exports = todolistService;