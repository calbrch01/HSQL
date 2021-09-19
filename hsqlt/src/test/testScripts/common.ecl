IMPORT STD;

FileName:= '~hsql::testfiles::weatherdata.csv';

LayoutWeatherRaw :=RECORD
  String Date;
  String Max;
  String Min;
  String Avg;
  String Departure;
  String HDD;
  String CDD;
  String Precipitation;
  String NewSnow;
  String SnowDepth;
END;

LayoutWeatherFixed := RECORD
  Std.Date.Date_t Date;
  Decimal4_2 Max;
  Decimal4_2 Min;
  Decimal4_2 Avgg;
  Decimal2_2 Departure;
  Decimal4_2 HDD;
  Decimal4_2 CDD;
  Decimal4_2 Precipitation;
  Decimal4_2 NewSnow;
  Decimal4_2 SnowDepth;
END;


rawData :=DATASET(FileName, LayoutWeatherRaw, CSV(HEADING(1)));


LayoutWeatherFixed cleanData(LayoutWeatherRaw raw) :=TRANSFORM
  SELF.Date := STD.Date.FromStringToDate(raw.Date[..10],'%m/%d/%Y');
  SELF.Max := (Decimal4_2)raw.Max;
  SELF.Min := (Decimal4_2)raw.Min;
  SELF.Avgg := (Decimal4_2)raw.Avg;
  SELF.Departure := (Decimal4_2)raw.Departure;
  SELF.HDD := (Decimal4_2)raw.HDD;
  SELF.CDD := (Decimal4_2)raw.CDD;
  SELF.Precipitation := (Decimal4_2)raw.Precipitation;
  SELF.NewSnow := (Decimal4_2)raw.NewSnow;
  SELF.SnowDepth := (Decimal4_2)raw.SnowDepth;
END;

cleaned := PROJECT(rawData,cleanData(LEFT));

export common := module
        export WeatherDataLayout := LayoutWeatherFixed;
        export WeatherDataSet := cleaned;
end;
