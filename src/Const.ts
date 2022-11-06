export default class {
  public static readonly MAX_FILES = 1;
  public static readonly FILE_MAX_SIZE = 100_000_000;
  public static readonly B_TO_MB = 1_000_000;
  
  public static readonly NAME_MIN_LEN = 3;
  public static readonly NAME_MAX_LEN = 25;
  
  public static readonly SYMBOL_MIN_LEN = 1;
  public static readonly SYMBOL_MAX_LEN = 3;

  public static readonly AMOUNT_MIN = 1;
  public static readonly AMOUNT_MAX = 10_000;

  public static readonly ADDRESS_BEGIN_DOT = 22;
  public static readonly ADDRESS_END_DOT = 34;
  public static readonly ADDRESS_LENGTH = 42;

  public static readonly DESCRIPTION_MIN_LEN = 20;
  public static readonly DESCRIPTION_MAX_LEN = 2000;

  public static readonly ETH_REQUEST_ACCOUNT = 'eth_requestAccounts';

  public static readonly ICON_INFO_SIZE = 18;
}
