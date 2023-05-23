import React, { MouseEventHandler } from "react";


const Button = (  props: {
    text: string,
    url: string,
    btnClName: string,
    divClName: string,
    func: MouseEventHandler<HTMLAnchorElement>
} ) =>
 {
   
        return(
            <div className={props.divClName}>
                        <a
                            type="submit"
                          href= {props.url}
                          className={props.btnClName}
                          onClick={props.func}
                        >
                          {props.text}
                        </a>
                      </div>
        )
    }

    Button.defaultProps ={
        text: 'No value',
        url: undefined,
        btnClName: undefined,
        divClName: undefined,
        func: null
    }

export default Button;