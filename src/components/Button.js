import classNames from "classnames"


function Button({text, variant = 'default'}){
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center rounded" : true,
            "bg-gray-500" : variant === 'default',
            "bg-yellow-500" : variant === 'warning',
            "bg-green-500" : variant === 'success',

        })}>{text}</button>
    )
}

export default Button