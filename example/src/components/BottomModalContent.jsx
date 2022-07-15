import { useModal } from 'react-advance-modal'

const BottomModalContent = () => {
  const modal = useModal('bottom')

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, ea vix essent diceret, vidit abhorreant sed
        at, duo consul numquam at.
      </p>
      <button onClick={modal.pop}> Close </button>
    </div>
  )
}

export default BottomModalContent
