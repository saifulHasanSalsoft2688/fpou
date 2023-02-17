import "./style.css"

const InviteCustomInput = (props) => {

  return (
    <>
      <div className="inputWrapper ">
        {props?.label && <label htmlFor={props?.id} className={props?.labelClass}>{props?.label}{props?.required ? '*' : ''}</label>}
        <input value={props?.value} type={props?.type} placeholder={props?.placeholder} required={props?.required} id={props?.id} name={props?.name} className={props?.inputClass} onChange={props?.onChange} />
        <button type={props?.btnType}>{props?.text}</button>
      </div>
    </>
  )
}

export default InviteCustomInput;
