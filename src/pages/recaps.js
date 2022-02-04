import * as React from "react"
import HomeNav from "../components/HomeNav";
import recap from "../images/RECAP.png";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin:2%;
  text-transform:none;
`

const Recaps = () => (
  <>
  <HomeNav />
  <div>
    <img src={recap} style={{justifyContent:"center", display:"block", margin:"auto"}}/>
<StyledDiv>
    <h2>Episode 1: Baja Blastin' Through Portals</h2>
    <p>
      A young man, dirty and disheveled from a long journey, arrives in the town of Saltmarsh on an overladen wagon. 
      Entering Orvil's Forge and Smithy, he finds the human cleric Orvil and the warforged artificer Furnace. 
      The man, Danny, asks for information about a  dark haired woman who was last seen in Saltmarsh. 
      Knowing that The Snapping Line is a hub for information the trio heads there. At the inn they speak to the owner, 
      Hannah Rist and meet the rest of the crew: the half-elf sorcerer Nebbiolo, the half-elf paladin Carmae, 
      and finally the halfling wizard Tilly.
    </p>
    <p>
      Danny sees his new acquaintances as a shortcut to coming to terms with Fistandia, the target of his mission. 
      He offers a significant amount of gold to Orvil and Furnace to accompany him and help recover the books that 
      Fistandia has absconded with. Overhearing the offer of gold, the rest of the characters quickly interject themselves 
      into the conversation offering to help. This group of strangers suddenly find themselves on their first mission.
    </p>
    <p>  
      Hannah Rist was able to supply the party a lead on their quarry (for a small price) and pointed them towards the 
      "haunted" mansion. Wasting no time, the party found themselves outside of an old, dilapidated building. Upon entry, 
      Furnace finds and picks up a book with arcane sigils scribbled into the margins saying "scepter".
      At the utterance of the activation word, an unworldly sound of ripping and guttural roaring is heard in the foyer of the 
      house and before then stands a shimmering rip between worlds. Within the rip is a simple wooden door ever so slightly ajar.
    </p>
    <p>  
      Carmae is the first to rush towards adventure and with the thought of her lost aunt on her mind she rushes into the door. 
      The party follows with Nebbiolo at the rear. As he is passing through the portal he catches a glimpse of Danny picking up 
      something dark and polished from the debris. A blood curdling scream is the last thing the party hears before the portal door 
      slams shut, locking the party within this unknown environment.
    </p>
    <p>
      The interior they find themselves in is relatively mundane, and as the party starts exploring Carmae and Tilly find themselves 
      used as play-things as they are lost in a euphoric confusion, walking into walls and becoming lost in the glowing orbs. 
      Furnace enters a kitchen that is full of mewling cats and two small, odd looking winged creatures. One of them introduces 
      themselves as Cumin and Coriander. Coriander seems to be as helpful as possible, but he is not knowledgeable about much more 
      than the work in the kitchen. Cumin, lacking a mouth, is content to tend to his duties feeding the cats and keeping the mansion 
      clean.
    </p>
    <p>
      The party starts collecting books with gold letters on them as they move through the house. These books were described to 
      them as being on Coriander’s “No Touch List”. They eventually climb the stairs and find a lab of sorts with a grandiose star map. 
      The next room is magically fashioned to replicate a starry night on a grassy hill. Furnace quickly determines that this is a 
      puzzle and helps the party align the telescopes to correspond to the star map in the previous room. A small click is heard behind 
      them as they see a secret door appear. Nebbiolo enters the room and finds a large bookcase dominates the southern wall. The bookcase 
      is covered with chains tethering all of the heavy tomes. As Nebbiolo reaches for a book, the Chained Bookcase animates and attacks, 
      starting our very first battle. Roll initiative!
    </p>
    </StyledDiv>
  </div>
  </>
)

export default Recaps
