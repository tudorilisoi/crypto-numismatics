const coins = [
	'Bitcoin (BTC)',
	'Ethereum (ETH)',
	'Ripple (XRP)',
	'Bitcoin Cash (BCH)',
	'Litecoin (LTC)',
	'EOS (EOS)',
	'Stellar (XLM)',
	'Cardano (ADA)',
	'NEO (NEO)',
	'IOTA (MIOTA)',
	'Monero (XMR)',
	'Dash (DASH)',
	'TRON (TRX)',
	'Tether (USDT)',
	'NEM (XEM)',
	'VeChain (VEN)',
	'Ethereum Classic (ETC)',
	'Binance Coin (BNB)',
	'Qtum (QTUM)',
	'OmiseGO (OMG)',
	'Lisk (LSK)',
	'ICON (ICX)',
	'Verge (XVG)',
	'Nano (NANO)',
	'Bitcoin Gold (BTG)',
	'Zcash (ZEC)',
	'Steem (STEEM)',
	'Ontology (ONT)',
	'Bytom (BTM)',
	'DigixDAO (DGD)',
	'Populous (PPT)',
	'BitShares (BTS)',
	'Bytecoin (BCN)',
	'Waves (WAVES)',
	'Stratis (STRAT)',
	'Siacoin (SC)',
	'Aeternity (AE)',
	'RChain (RHOC)',
	'Status (SNT)',
	'Dogecoin (DOGE)',
	'Bitcoin Diamond (BCD)',
	'Maker (MKR)',
	'Decred (DCR)',
	'Zilliqa (ZIL)',
	'Augur (REP)',
	'Komodo (KMD)',
	'0x (ZRX)',
	'Ardor (ARDR)',
	'Waltonchain (WTC)',
	'Veritaseum (VERI)',
	'Hshare (HSR)',
	'Aion (AION)',
	'Ark (ARK)',
	'Cryptonex (CNX)',
	'PIVX (PIVX)',
	'Loopring (LRC)',
	'KuCoin Shares (KCS)',
	'QASH (QASH)',
	'Basic Attention Token (BAT)',
	'MonaCoin (MONA)',
	'IOStoken (IOST)',
	'DigiByte (DGB)',
	'Factom (FCT)',
	'Nebulas (NAS)',
	'Golem (GNT)',
	'GXChain (GXS)',
	'Gas (GAS)',
	'Ethos (ETHOS)',
	'Revain (R)',
	'Syscoin (SYS)',
	'Dragonchain (DRGN)',
	'FunFair (FUN)',
	'Kyber Network (KNC)',
	'aelf (ELF)',
	'ZCoin (XZC)',
	'Storm (STORM)',
	'Electroneum (ETN)',
	'Substratum (SUB)',
	'Kin (KIN)',
	'Power Ledger (POWR)',
	'ReddCoin (RDD)',
	'Nxt (NXT)',
	'SALT (SALT)',
	'Mithril (MITH)',
	'MaidSafeCoin (MAID)',
	'Byteball Bytes (GBYTE)',
	'Enigma (ENG)',
	'Dent (DENT)',
	'Nucleus Vision (NCASH)',
	'Neblio (NEBL)',
	'Storj (STORJ)',
	'Skycoin (SKY)',
	'Request Network (REQ)',
	'Bancor (BNT)',
	'Emercoin (EMC)',
	'ChainLink (LINK)',
	'TenX (PAY)',
	'Dropil (DROP)',
	'WAX (WAX)',
	'Dentacoin (DCN)',
	'Genaro Network (GNX)',
	'Achain (ACT)',
	'Particl (PART)',
	'Cindicator (CND)',
	'Vertcoin (VTC)',
	'Nexus (NXS)',
	'Metal (MTL)',
	'Credits (CS)',
	'Polymath (POLY)',
	'Nuls (NULS)',
	'MinexCoin (MNX)',
	'Matrix AI Network (MAN)',
	'Iconomi (ICN)',
	'Genesis Vision (GVT)',
	'Enjin Coin (ENJ)',
	'Decentraland (MANA)',
	'POA Network (POA)',
	'Bitcore (BTX)',
	'Civic (CVC)',
	'Cube (AUTO)',
	'GameCredits (GAME)',
	'Oyster (PRL)',
	'ZenCash (ZEN)',
	'Dynamic Trading Rights (DTR)',
	'iExec RLC (RLC)',
	'Blocknet (BLOCK)',
	'Theta Token (THETA)',
	'Quantstamp (QSP)',
	'Time New Bank (TNB)',
	'Gnosis (GNO)',
	'Raiden Network Token (RDN)',
	'SmartCash (SMART)',
	'SingularityNET (AGI)',
	'Monaco (MCO)',
	'Ignis (IGNIS)',
	'BitcoinDark (BTCD)',
	'Santiment Network Token (SAN)',
	'Po.et (POE)',
	'PayPie (PPP)',
	'Aragon (ANT)',
	'DeepBrain Chain (DBC)',
	'Pillar (PLR)',
	'Ubiq (UBQ)',
	'Fusion (FSN)',
	'DEW (DEW)',
	'SIRIN LABS Token (SRN)',
	'NavCoin (NAV)',
	'Arcblock (ABT)',
	'THEKEY (TKY)',
	'Eidoo (EDO)',
	'Bluzelle (BLZ)',
	'Telcoin (TEL)',
	'Gifto (GTO)',
	'Asch (XAS)',
	'BOScoin (BOS)',
	'CyberMiles (CMT)',
	'DigitalNote (XDN)',
	'ETHLend (LEND)',
	'SmartMesh (SMT)',
	'Envion (EVN)',
	'Bibox Token (BIX)',
	'MediBloc (MED)',
	'BLOCKv (VEE)',
	'BridgeCoin (BCO)',
	'Scry.info (DDD)',
	'Quantum Resistant Ledger (QRL)',
	'AdEx (ADX)',
	'ION (ION)',
	'XTRABYTES (XBY)',
	'Ruff (RUFF)',
	'SaluS (SLS)',
	'Loom Network (LOOM)',
	'SophiaTX (SPHTX)',
	'Edgeless (EDG)',
	'CRYPTO20 (C20)',
	'MediShares (MDS)',
	'Ambrosus (AMB)',
	'Einsteinium (EMC2)',
	'Ripio Credit Network (RCN)',
	'IoT Chain (ITC)',
	'OST (OST)',
	'DATA (DTA)',
	'Peercoin (PPC)',
	'Pura (PURA)',
	'AirSwap (AST)',
	'Red Pulse (RPX)',
	'SONM (SNM)',
	'Ormeus Coin (ORME)',
	'Groestlcoin (GRS)',
	'UTRUST (UTK)',
	'SpankChain (SPANK)',
	'High Performance Blockchain (HPB)',
	'Feathercoin (FTC)',
	'Gulden (NLG)',
	'BitBay (BAY)',
	'WePower (WPR)',
	'QLINK (QLC)',
	'Wings (WINGS)',
	'Crypterium (CRPT)',
	'Experience Points (XP)',
	'Ravencoin (RVN)',
	'Pundi X (NPXS)',
	'Modum (MOD)',
	'Paypex (PAYX)',
	'CasinoCoin (CSC)',
	'VIBE (VIBE)',
	'NAGA (NGC)',
	'SingularDTV (SNGLS)',
	'AppCoins (APPC)',
	'Streamr DATAcoin (DATA)',
	'Bread (BRD)',
	'Tierion (TNT)',
	'district0x (DNT)',
	'Zap (ZAP)',
	'Steem Dollars (SBD)',
	'MobileGo (MGO)',
	'Rock (RKT)',
	'TaaS (TAAS)',
	'Soarcoin (SOAR)',
	'Trinity Network Credit (TNC)',
	'Wagerr (WGR)',
	'INS Ecosystem (INS)',
	'Counterparty (XCP)',
	'Viacoin (VIA)',
	'WaBi (WABI)',
	'Bottos (BTO)',
	'Etherparty (FUEL)',
	'Ink (INK)',
	'Universa (UTNP)',
	'OriginTrail (TRAC)',
	'IHT Real Estate Protocol (IHT)',
	'LBRY Credits (LBC)',
	'bitCNY (BITCNY)',
	'Burst (BURST)',
	'Jibrel Network (JNT)',
	'Presearch (PRE)',
	'CloakCoin (CLOAK)',
	'Unobtanium (UNO)',
	'BlockMason Credit Protocol (BCPT)',
	'Delphy (DPY)',
	'LEOcoin (LEO)',
	'Aeon (AEON)',
	'Melon (MLN)',
	'Unikoin Gold (UKG)',
	'Triggers (TRIG)',
	'Game.com (GTC)',
	'Mooncoin (MOON)',
	'HTMLCOIN (HTML)',
	'Metaverse ETP (ETP)',
	'ERA (ERA)',
	'indaHash (IDH)',
	'KickCoin (KICK)',
	'Blox (CDT)',
	'Mobius (MOBI)',
	'LinkEye (LET)',
	'SpaceChain (SPC)',
	'Legolas Exchange (LGO)',
	'Viberate (VIB)',
	'Namecoin (NMC)',
	'Havven (HAV)',
	'Synereo (AMP)',
	'Lykke (LKK)',
	'Safe Exchange Coin (SAFEX)',
	'CPChain (CPC)',
	'Crown (CRW)',
	'Shift (SHIFT)',
	'Flash (FLASH)',
	'TomoChain (TOMO)',
	'Nimiq Exchange Token (NET)',
	'Elastic (XEL)',
	'PotCoin (POT)',
	'Fortuna (FOTA)',
	'Dai (DAI)',
	'Lunyr (LUN)',
	'Odyssey (OCN)',
	'TokenCard (TKN)',
	'XPA (XPA)',
	'Humaniq (HMQ)',
	'Spectre.ai Dividend Token (SXDT)',
	'Mothership (MSP)',
	'SunContract (SNC)',
	'YOYOW (YOYOW)',
	'Mercury (MER)',
	'DECENT (DCT)',
	'DeepOnion (ONION)',
	'Cofound.it (CFI)',
	'Monetha (MTH)',
	'ECC (ECC)',
	'Datum (DAT)',
	'E-Dinar Coin (EDR)',
	'Diamond (DMD)',
	'Internet Node Token (INT)',
	'ZClassic (ZCL)',
	'Bean Cash (BITB)',
	'DMarket (DMT)',
	'Pepe Cash (PEPECASH)',
	'Bankex (BKX)',
	'Everex (EVX)',
	'Storiqa (STQ)',
	'Peerplays (PPY)',
	'BlackCoin (BLK)',
	'adToken (ADT)',
	'UpToken (UP)',
	'Decision Token (HST)',
	'ATMChain (ATM)',
	'Zeepin (ZPT)',
	'Dimecoin (DIME)',
	'Trade Token (TIO)',
	'QunQun (QUN)',
	'Republic Protocol (REN)',
	'WhiteCoin (XWC)',
	'Cashaa (CAS)',
	'Paragon (PRG)',
	'STK (STK)',
	'Numeraire (NMR)',
	'Blockport (BPT)',
	'Bloom (BLT)',
	'Uquid Coin (UQC)',
	'Medicalchain (MTN)',
	'SwissBorg (CHSB)',
	'Electra (ECA)',
	'Hive Project (HVN)',
	'GridCoin (GRC)',
	'Primecoin (XPM)',
	'RevolutionVR (RVR)',
	'PRIZM (PZM)',
	'FirstBlood (1ST)',
	'Electrify.Asia (ELEC)',
	'Linda (LINDA)',
	'WeTrust (TRST)',
	'I/O Coin (IOC)',
	'Alphacat (ACAT)',
	'Moeda Loyalty Points (MDA)',
	'SIBCoin (SIB)',
	'SwftCoin (SWFTC)',
	'Matchpool (GUP)',
	'Blocktix (TIX)',
	'NoLimitCoin (NLC2)',
	'Bitcoin Atom (BCA)',
	'Propy (PRO)',
	'Selfkey (KEY)',
	'bitUSD (BITUSD)',
	'VeriCoin (VRC)',
	'BitClave (CAT)',
	'Matryx (MTX)',
	'carVertical (CV)',
	'SureRemit (RMT)',
	'True Chain (TRUE)',
	'Agrello (DLT)',
	'All Sports (SOC)',
	'Zeusshield (ZSC)',
	'ICOS (ICOS)',
	'MUSE (MUSE)',
	'EncrypGen (DNA)',
	'Blackmoon (BMC)',
	'MonetaryUnit (MUE)',
	'CoinMeet (MEE)',
	'Refereum (RFR)',
	'Pascal Coin (PASC)',
	'Banyan Network (BBN)',
	'Tao (XTO)',
	'Omni (OMNI)',
	'Aeron (ARN)',
	'Energo (TSL)',
	'YEE (YEE)',
	'Incent (INCNT)',
	'COSS (COSS)',
	'SHIELD (XSH)',
	'Divi (DIVX)',
	'DADI (DADI)',
	'Bismuth (BIS)',
	'LATOKEN (LA)',
	'Qbao (QBT)',
	'Bodhi (BOT)',
	'SolarCoin (SLR)',
	'BitDegree (BDG)',
	'InsurePal (IPL)',
	'Grid+ (GRID)',
	'Maecenas (ART)',
	'Radium (RADS)',
	'OAX (OAX)',
	'Target Coin (TGT)',
	'PoSW Coin (POSW)',
	'Phore (PHR)',
	'Rialto (XRL)',
	'Lamden (TAU)',
	'Exchange Union (XUC)',
	'ShipChain (SHIP)',
	'iXledger (IXT)',
	'Expanse (EXP)',
	'HempCoin (THC)',
	'Olympus Labs (MOT)',
	'Rivetz (RVT)',
	'Restart Energy MWAT (MWAT)',
	'Xaurum (XAUR)',
	'OracleChain (OCT)',
	'Cappasity (CAPP)',
	'Datawallet (DXT)',
	'Swarm (SWM)',
	'Covesting (COV)',
	'Lympo (LYM)',
	'Clams (CLAM)',
	'NVO (NVST)',
	'ALIS (ALIS)',
	'ProChain (PRA)',
	'AICHAIN (AIT)',
	'Leadcoin (LDC)',
	'Neumark (NEU)',
	'BitSend (BSD)',
	'Universal Currency (UNIT)',
	'Russian Miner Coin (RMC)',
	'ALQO (ALQO)',
	'LoMoCoin (LMC)',
	'NewYorkCoin (NYC)',
	'Rubycoin (RBY)',
	'Databits (DTB)',
	'CanYaCoin (CAN)',
	'Boolberry (BBR)',
	'EarthCoin (EAC)',
	'True USD (TUSD)',
	'Snovio (SNOV)',
	'Energycoin (ENRG)',
	'FlorinCoin (FLO)',
	'Waves Community Token (WCT)',
	'Debitum Network (DEB)',
	'DecentBet (DBET)',
	'Auroracoin (AUR)',
	'Karma (KRM)',
	'Centra (CTR)',
	'TE-FOOD (TFD)',
	'Hi Mutual Society (HMC)',
	'ToaCoin (TOA)',
	'Everus (EVR)',
	'Swarm City (SWT)',
	'TransferCoin (TX)',
	'Zoin (ZOI)',
	'MyBit Token (MYB)',
	'Stox (STX)',
	'Measurable Data Token (MDT)',
	'ATBCoin (ATB)',
	'ATN (ATN)',
	'InvestFeed (IFT)',
	'CoinFi (COFI)',
	'Gambit (GAM)',
	'OKCash (OK)',
	'Eroscoin (ERO)',
	'FidentiaX (FDX)',
	'EchoLink (EKO)',
	'CoinPoker (CHP)',
	'Hacken (HKN)',
	'CHIPS (CHIPS)',
	'NeosCoin (NEOS)',
	'HelloGold (HGT)',
	'TokenClub (TCT)',
	'The ChampCoin (TCC)',
	'U.CASH (UCASH)',
	'Quantum (QAU)',
	'DomRaider (DRT)',
	'Spectrecoin (XSPEC)',
	'SportyCo (SPF)',
	'Polybius (PLBT)',
	'DubaiCoin (DBIX)',
	'Myriad (XMY)',
	'aXpire (AXP)',
	'CVCoin (CVCOIN)',
	'HEAT (HEAT)',
	'GCN Coin (GCN)',
	'Primas (PST)',
	'DIMCOIN (DIM)',
	'BitDice (CSNO)',
	'Patientory (PTOY)',
	'Musicoin (MUSIC)',
	'Profile Utility Token (PUT)',
	'bitqy (BQ)',
	'AirToken (AIR)',
	'Aurora DAO (AURA)',
	'Golos (GOLOS)',
	'Mintcoin (MINT)',
	'Hackspace Capital (HAC)',
	'Chronobank (TIME)',
	'GoByte (GBX)',
	'Solaris (XLR)',
	'Ethereum Movie Venture (EMV)',
	'Hubii Network (HBT)',
	'Dynamic (DYN)',
	'LockChain (LOC)',
	'Nexium (NXC)',
	'EZToken (EZT)',
	'LUXCoin (LUX)',
	'Polis (POLIS)',
	'BitConnect (BCC)',
	'Worldcore (WRC)',
	'ColossusXT (COLX)',
	'OneRoot Network (RNT)',
	'Pandacoin (PND)',
	'Oxycoin (OXY)',
	'Novacoin (NVC)',
	'Ties.DB (TIE)',
	'Block Array (ARY)',
	'Guaranteed Ethurance Token Extra (GETX)'
];
