module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    })
};