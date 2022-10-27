from pyspark import SparkContext
from pyspark.sql import SQLContext


sc = SparkContext()
sqlContext = SQLContext(sc)

df = sqlContext.read.format('com.databricks.spark.csv').option('header', 'true').load('C:\\Apache\\Spark3.3\\input\\example.csv')

df.show(5)


df.coalesce(1).write.mode('overwrite').csv('C:\\Apache\\Spark3.3\\output\\', header=True)
