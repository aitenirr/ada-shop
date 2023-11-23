function ServiceCard(props) {
  return (
    <div className="py-8 px-4 bg-[#F3F5F7] flex-1">
      {<props.Icon size={48} strokeWindth={1} />}
      <h4 className="text-sm font-semibold"> {props.title}</h4>
      <p className="text-sm text-[#6C7275]">{props.descrip}</p>
    </div>
  );
}
export default ServiceCard;
