import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { isAddress } from 'web3-utils';
import Const from './Const';
import { dataUriToFile } from './utils/DataUri';

export default () => (useForm({
  initialValues: {
    file: '',
    blockchain: '',
    protocol: '',
    name: '',
    symbol: '',
    amount: '',
    owner: '',
    description: ''
  },
  validate: {
    file: (value) => {
      try {
        const file: File = dataUriToFile(value);
        if(file.size > Const.FILE_MAX_SIZE) return `Max file size is ${(Const.FILE_MAX_SIZE / Const.B_TO_MB)}MB (${(file.size / Const.B_TO_MB)}/${(Const.FILE_MAX_SIZE / Const.B_TO_MB)})`;
        if((new Array(IMAGE_MIME_TYPE)).join('|').indexOf(file.type) === -1) return `File type "${file.type}" is not accepted`;
        return null;
      }
      catch {
        return 'File is mandatory';
      }
    },
    blockchain: (value) => (value.length > 0 ? null : 'Blockchain is mandatory'),
    protocol: (value) => (value.length > 0 ? null : 'Protocol is mandatory'),
    name: (value) => {
      if(value.length === 0) return 'Name is mandatory';
      if(value.length < Const.NAME_MIN_LEN) return `Name must contain at least ${Const.NAME_MIN_LEN} characters (${value.length}/${Const.NAME_MIN_LEN})`;
      if(value.length > Const.NAME_MAX_LEN) return `Name must contain a maximum of ${Const.NAME_MAX_LEN} characters (${value.length}/${Const.NAME_MAX_LEN})`;
      return null;
    },
    symbol: (value) => {
      if(value.length === 0) return 'Symbol is mandatory';
      if(value.length < Const.SYMBOL_MIN_LEN) return `Symbol must contain at least ${Const.SYMBOL_MIN_LEN} characters (${value.length}/${Const.SYMBOL_MIN_LEN})`;
      if(value.length > Const.SYMBOL_MAX_LEN) return `Symbol must contain a maximum of ${Const.SYMBOL_MAX_LEN} characters (${value.length}/${Const.SYMBOL_MAX_LEN})`;
      return null;
    },
    amount: (value) => {
      if(value.length === 0) return 'Amount is mandatory';
      if(!(Number(value) || (Number(value) === 0 && value.trim() !== ''))) return 'Amount must be a number';
      if(Number(value) < Const.AMOUNT_MIN || Number(value) > Const.AMOUNT_MAX) return `Amount must be between ${Const.AMOUNT_MIN} and ${Const.AMOUNT_MAX}`;
      return null;
    },
    owner: (value) => {
      if(value.length === 0) return 'Owner is mandatory, connect to MetaMask';
      if(value.length !== Const.ADDRESS_LENGTH) return `Owner address must contain ${Const.ADDRESS_LENGTH} characters (${value.length}/${Const.ADDRESS_LENGTH})`;
      if(!isAddress(value)) return 'Owner must be a valid address';
      return null;
    },
    description: (value) => {
      if(value.length === 0) return 'Description is mandatory';
      if(value.length < Const.DESCRIPTION_MIN_LEN) return `Description must contain at least ${Const.DESCRIPTION_MIN_LEN} characters (${value.length}/${Const.DESCRIPTION_MIN_LEN})`;
      if(value.length > Const.DESCRIPTION_MAX_LEN) return `Description must contain a maximum of ${Const.DESCRIPTION_MAX_LEN} characters (${value.length}/${Const.DESCRIPTION_MAX_LEN})`;
      return null;
    }
  }
}));
