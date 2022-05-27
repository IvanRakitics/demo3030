import validator from "validator";
import { isEmpty } from "lodash";

const validatorInput = (data) =>{
    let errors = {}
    if(validator.isEmpty(data.uname)){
        errors.uname = "用户名不能为空"
    }
    if(validator.isEmpty(data.upassword)){
        errors.upassword = "密码不能为空"
    }

    return{
        isValid:!isEmpty(errors),
        errors
    }
}

export default validatorInput