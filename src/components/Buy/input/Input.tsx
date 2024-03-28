import React, { Component } from 'react';
import './Input.css';
import { Search } from 'lucide-react';

type InputProps = {
  onSearch: (searchTerm: string) => void;
  value: string;
}

type InputState = {
  showSearchIcon: boolean;
}

export default class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      showSearchIcon: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleSearchIcon = this.toggleSearchIcon.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    this.props.onSearch(inputValue);
    this.toggleSearchIcon(!inputValue); // Показывать иконку поиска, если введено значение
  }

  toggleSearchIcon(show: boolean) {
    this.setState({ showSearchIcon: show });
  }

  render() {
    const { value } = this.props;
    const { showSearchIcon } = this.state;

    return (
      <div className='input-div'>
        <div className="bacInput">
          <button onClick={() => this.toggleSearchIcon(true)} className='buttonI'>
            {showSearchIcon && <Search size={20} strokeWidth={1.25} className='search-icon' />}
          </button>
          <input type="text" className='input-buy' onChange={this.handleChange} value={value} />
        </div>
      </div>
    );
  }
}
