import {Photo} from "../../../components/Photo/Photo";
import photo1 from "../../../assets/image/portfolio9.webp";
import photo2 from "../../../assets/image/portfolio8.webp";
import photo3 from "../../../assets/image/portfolio7.webp";
import styled from "styled-components";

export const Blog = () => {
    return (
        <BlogBody>
            <h2>Blog</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            <BlogPosts>
                <BlogPost>
                    <Photo src={photo1} width={"310"} height={"300"}/>
                    <h4>How to make web tempates</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna</span>
                    <button>Learn More</button>
                </BlogPost>
                <BlogPost>
                    <Photo src={photo2} width={"310"} height={"300"}/>
                    <h4>How to make web tempates</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna</span>
                    <button>Learn More</button>
                </BlogPost>
                <BlogPost>
                    <Photo src={photo3} width={"310"} height={"300"}/>
                    <h4>How to make web tempates</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna</span>
                    <button>Learn More</button>
                </BlogPost>
            </BlogPosts>
        </BlogBody>
    )
}
const BlogBody = styled.div`
    width: 970px;
    height: 665px;
    background-color: bisque;
`

const BlogPosts = styled.div`
    //display: flex;
    //    flex-wrap: wrap;
    //    flex-direction: row;
    //    gap: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 20px;
`
const BlogPost = styled.div`
    width: 310px;
    height: 474px;
`