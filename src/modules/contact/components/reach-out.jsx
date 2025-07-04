const ReachOut = ({icon, title, type}) => {
  const Icon = icon;

  return (
    <div className="flex gap-3 items-center">
      <div className="bg-stone900/30 p-3 text-stone900">
        <Icon size={18}/>
      </div>
      <div>
        <h3 className="mb-1.5 font-Playfair">{title}</h3>
        <p className="text-stone950/60">{type}</p>
      </div>
    </div>
  )
}

export default ReachOut