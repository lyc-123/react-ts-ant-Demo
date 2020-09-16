import * as React from 'react'
import './header.scss'
import { withRouter } from 'react-router-dom';


class Header extends React.Component<any, any>{
            constructor(props: any){
                super(props)
                this.state = {
                    data: []
                }
            }
            public render(){
            return(
                <div className='header'>
                    <div className='header-box'>
                        <div className='header-three'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA5RJREFUWAntl71rU1EYxvNFDbQgGW2ho1bFDm2StohDK3WStiA4+CcUB7vUwV3QRUHa3clJTB0cLLYVIUlJXKpWVBAs6GCHEGxBIWn8PZd7y23uyc3HDZ164HDOPfd9nve573nPxw2FTspJBIJFINwufHNz8+zBwcEcuGnqYK1W6xdHOBz+RbNDXY1EIpmxsbGvGm+3tCwon8+PIuQhDqZadLKGsMXx8fH3LdpbZk0FEYFYLpd7TATm6cu+RH8FZyv0t/v6+hSZ0N7eXn+1Wr3IuxnsZhlK0KdbW56YmLhDvyK7ZsVX0NbWVmJ/f/85pJMQ/UXEo1gs9iCZTJb9iIvF4ulKpXKXiC5gF0fMem9v743h4eGSH07vGgpCRIxpei0xEP5EzBx5UWxG6H5PviURlYFjQKKYvmu0vpGKuAncfU2TI4YWLe2JEZcwwuqDxCVOtw9T3xghJTAEBeq/aDR6pRMxbmeKFPn1DmGnqCm/RDdGSKsJMWHlTFAxEiYOcYnTXqluvUf6HkGFQuEcFlraJSXwEesADzaXknpKe1kjKo8gVoeWrDa6lWarqRGpaVxc4tQ7oqSN1Vg8grDSDhwixBbYiOpwkCl7aUMtHyYak6BB23DbBAgyxgL5ZOMdHx46jyC+wjqbnB3Ygwgw4HA6PkxUHkEmo26NESHjNuPm9wgi8Q7PJrdhN/rlcvmMeBwfJk6PIIx2bMMLJkCQMR2+Nt7x4aEzCVqVFUvTWv4eRIABIjNjwy0fJiqPIDYwa7mTeLM6tU2gTsbEJU5hHR8mHo+gVCr1BcM1akJXCBOokzGbKwH2je3DSOMRJCs2xUXCW2PaFnQwGpFtDNrXkAVxwu37kUZBOo0J7zI+44jKZLPZgTb8HzEVVhzioi75nfQCNtwXENTtC9oGYqaJUmcXNAF17aRdR9yA7jPck+63kuiyka0wwlpfHg7nmonxjZBeqihSQS75ULyAQ6uLjTp6i7vRM/E2Kg2nrB6gWyS50PJvENHYQMC9dDpNGmVvw/eEqh+FSaYuX8/vPLcsyAHoAmffmQ5/FHEeIQq7tN+we8s+k2Fpf3QwaonyEjbzdH/H4/H0yMjID/d7p9+2IAfYbouYKKJegdOfx4dEInF5aGjoTz2PcdnXG3XjGRHVnp6em7SfEXepVCo9NfEemyA51zWW6bxOd5d6VVHTuLscqyA5Jre+k+znETOqqLnFnPRbicB/s0mrARHWdIQAAAAASUVORK5CYII=" alt=""/>
                            <div className='search' onClick={this.HandleSearch}>搜索</div>
                        </div>
                    </div>
                    <div className="mes">
                        <img src="https://aivr.vip/static/kaipu/news.png" alt=""/>
                    </div>
                </div>
            );
        }
    public HandleSearch = () => {
       this.props.history.push('/searchs')
    }
}

export default withRouter(Header)
