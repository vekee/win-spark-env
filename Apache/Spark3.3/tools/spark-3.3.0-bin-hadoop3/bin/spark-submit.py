#!/usr/bin/env python
# 2022 APASYS DUAN DAHAI

import os
import sys


SPARK_HOME = os.environ["SPARK_HOME"]
if os.path.exists(HADOOP_PATCH_FILE) is False:
    shutil.copy(SPARK_HOME + "/bin/hadoop.dll", "C:/Windows/System32/hadoop.dll")

os.system(SPARK_HOME + "/bin/spark-submit " + sys.argv[1])
