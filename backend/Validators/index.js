exports.userSignupValidator = (req,res,next) => {
    req.check('name',"Name is required.").notEmpty()
    
    req.check('email', "Email is required").notEmpty()
    req.check('email', "Email must be 4 to 100 length")
    .matches(/.+\@.+\..+/)
    .withMessage("Invalid Email")
    .isLength({
        min: 4,
        max: 100
    })

    req.check('password',"Password is required.").notEmpty()
    req.check('password',"Password must contain at least 6 characters")
    .isLength({min:6})
    .matches(/\d/)
    .withMessage("Password must contain a digit")

    const errors =req.validationErrors()
    if(errors){
        const firstError = errors.map( (error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }
    next();
}

exports.createGroupValidator = (req, res, next) => {
    req.check('id', 'ID cannot be empty').notEmpty()
    req.check('mentor', "Invalid mentor email")
    .matches(/.+\@.+\..+/)
    .withMessage("Invalid mentor email")
    .isLength({
        min: 4,
        max: 100
    })

    const errors =req.validationErrors()
    if(errors){
        const firstError = errors.map( (error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }
    next();
}