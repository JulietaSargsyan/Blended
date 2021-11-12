import React from 'react'

interface Props {
    marginTop?: string;
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
    marginTop,
    children
}) => {
    return (
        <div className='button-container' style={{marginTop}}>
          <button className='button'>
            {children}

          </button>
        </div>
        
    )
}

export default Button;
