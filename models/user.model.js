module.exports = (sequelize, Sequelize) => {
        const User = sequelize.define('user', {
            firstName: {
                type: Sequelize.STRING,
                required: [true, "Please Enter firstName"],
                maxlength: 50,
                minlength: 3,
              },
              lastName: {
                type: Sequelize.STRING,
                required: [true, "Please Enter lastName"],
                maxlength: 50,
                minlength: 3,
              },
              email: {
                type: Sequelize.STRING,
                required: [true, "Please Enter Email"],
                   match: [ /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            "Please provide a valid email",
                          ],
                  unique: true,
              },
              password: {
                type: Sequelize.STRING,
                required: [true, "Please Enter the password"],
               minlength: 6,
              },

        });
        return User;
    };
    
