module.exports = (sequelize, Sequelize) => {
    const PostJob = sequelize.define(
        "locations", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        location: {
            type: Sequelize.STRING
        },
        conds : {
                type : Sequelize.STRING
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