import React ,{useState, useEffect}from 'react'
import {BsSearch} from 'react-icons/bs'
import {Wrapper,IconDiv, Input , FlyingText, SearchTitle, Xdiv, LensDiv} from './styles'
import {  useDispatch } from 'react-redux'
import {UserTopic} from '../../../../features/userSearchTopic'
import { useNavigate } from "react-router-dom";


function Search() {
  /*redirect to home page by onchange event in input*/
  const navigate = useNavigate();
    const dispatch=useDispatch()

    /*state for animation*/
    const [iconClicked, setIconClicked]=useState(false)
    const [searchTopic, setSearchTopic] =useState('')

const [searchTopiclength, setSearchTopicLength] =useState(false)

const [showCloseIcon, setShowCloseIcon] =useState(false)
const [back, setBack] =useState(false)
let typingTimer = null;



useEffect(()=>{
if (searchTopic?.length>0){
    setSearchTopicLength(true)

}
},[searchTopic])

useEffect(()=>{
    if (!iconClicked ){
      if(searchTopic.length>0){
        setSearchTopic('')
        setSearchTopicLength(false)
      
      }else if(searchTopic.length<=1){
        setBack(false)
        setSearchTopic('')
        setSearchTopicLength(false)
      }
    
    }
    },[iconClicked])

    /**************** */
     const onchangeInput=(e)=>{
      navigate("/");
        setSearchTopic(e.target.value)
        const val=e.target.value
        /*save in redux*/
        dispatch(UserTopic(val))
        
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            if (val) {
                setShowCloseIcon(true)
            }else{
                setShowCloseIcon(false)
            }
          }, 1000);
    }
    const handleKeyDown=(e)=>{
        if(e.key === "Backspace"){
            if(searchTopic.length<=1){
                setBack(true)
     
                }else {
                    setBack(false)
                  }
        
               }
               else {
                setBack(false)
               }
       
    }
    // console.log(`iconClicked +${iconClicked} searchTopiclength +${searchTopiclength} back +${back} `)
  return (
    <Wrapper>
        <Input 
        value={searchTopic} 
        placeholder='Search'
         className={iconClicked ? 'show' :'hide'} 
         onChange={onchangeInput}  
         onKeyDown={handleKeyDown}/> 

        <IconDiv 
        onClick={()=>setIconClicked(!iconClicked)} 
        className={iconClicked && !searchTopiclength ? 'rotate' : iconClicked && searchTopiclength ? 'secondrotate':''}
        >
        <SearchTitle 
        className={iconClicked ? 'hide' : ''}>
            Search
        </SearchTitle>
        {showCloseIcon && iconClicked && searchTopiclength? 
        <Xdiv>X</Xdiv>
         :
        <LensDiv><BsSearch /></LensDiv>           
       }  
        </IconDiv>
        <FlyingText 
        className={iconClicked && !searchTopiclength && !back? 'fadein' : iconClicked && searchTopiclength && !back 
        ? 
        'usertyping'
        :iconClicked && searchTopiclength && back 
        ?
         'backspace'
        : 
        ''}
        >
        .eg Movies  
        </FlyingText>
    </Wrapper>
  )
}

export default Search