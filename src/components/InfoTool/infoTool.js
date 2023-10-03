import './infoTool.css';
function InfoTooltip({ status, isOpen, onClose }) {
  return (
    <div
      className={`info-tool info-tool_type_infoTool ${
        isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className='info-tool__container info-tool__container_info'>
        <img
          src={status.image}
          className='info-tool__info-img'
          alt={status.text}
        />
        <h3 className='info-tool__info-title'>{status.text}</h3>
        <button
          className='info-tool__close-btn info-tool__close-img'
          type='button'
          aria-label='ClosePopup'
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
