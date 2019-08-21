module.exports =(sequelize, DataTypes) => {
    return sequelize.define('user', {
        idx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,            
        },
        pw: {
            type: DataTypes.STRING(255),
            allowNull: false,            
        },
    })
};