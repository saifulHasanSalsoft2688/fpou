import { useState } from 'react'
import "./style.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faUsers } from '@fortawesome/free-solid-svg-icons'

const CustomUpload = (props) => {

  const [typePass, setTypePass] = useState(true)

  const togglePassType = () => {
    setTypePass(!typePass)
  }

  return (
    <>
      <div className="inputWrapper">
        {props?.label && <label htmlFor={props?.id} className={props?.labelClass}>{props?.label}{props?.required ? '*' : ''}
            <div class="inputIcon">
            <FontAwesomeIcon icon={props?.iconShow} />
            </div>
        </label>}
        <input type={props?.type} placeholder={props?.placeholder} required={props?.required} id={props?.id} name={props?.name} className={props?.inputClass} onChange={props?.onChange} />
      </div>
    </>
  )
}
export default CustomUpload;
