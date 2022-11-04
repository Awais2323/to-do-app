module.exports = (sequelize, Sequelize) => {
    const PostJob = sequelize.define(
        "task", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        summary: {
            type: Sequelize.STRING
            },
        description : {
            type : Sequelize.STRING
        },
        date : {
                type : Sequelize.STRING
        },
        flag: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        userId: {
            type: Sequelize.INTEGER,
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
    );

    return PostJob;
};